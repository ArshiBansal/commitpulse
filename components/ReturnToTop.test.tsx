import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import ReturnToTop from './ReturnToTop';

describe('ReturnToTop', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });

    // Mock window.scrollTo
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not render button when scroll position is less than 300px', () => {
    render(<ReturnToTop />);

    const button = screen.queryByLabelText('Back to top');
    expect(button).not.toBeInTheDocument();
  });

  it('should render button when scroll position exceeds 300px', () => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 400,
    });

    render(<ReturnToTop />);

    // Trigger scroll event
    fireEvent.scroll(window);

    const button = screen.queryByLabelText('Back to top');
    expect(button).toBeInTheDocument();
  });

  it('should call scrollTo with smooth behavior when button is clicked', () => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 400,
    });

    render(<ReturnToTop />);
    fireEvent.scroll(window);

    const button = screen.getByLabelText('Back to top');
    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should have correct accessibility attributes', () => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 400,
    });

    render(<ReturnToTop />);
    fireEvent.scroll(window);

    const button = screen.getByLabelText('Back to top');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('aria-label', 'Back to top');
  });

  it('should have fixed positioning classes', () => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 400,
    });

    render(<ReturnToTop />);
    fireEvent.scroll(window);

    const container = screen.getByLabelText('Back to top').closest('div[class*="fixed"]');
    expect(container).toHaveClass('fixed', 'bottom-6', 'right-6', 'z-50');
  });

  it('should update visibility on scroll events', () => {
    const { rerender } = render(<ReturnToTop />);

    // Initially not visible
    expect(screen.queryByLabelText('Back to top')).not.toBeInTheDocument();

    // Simulate scroll below 300px
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 150,
    });
    fireEvent.scroll(window);
    rerender(<ReturnToTop />);
    expect(screen.queryByLabelText('Back to top')).not.toBeInTheDocument();

    // Simulate scroll above 300px
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 500,
    });
    fireEvent.scroll(window);
    rerender(<ReturnToTop />);
    expect(screen.getByLabelText('Back to top')).toBeInTheDocument();
  });

  it('should render chevron up icon', () => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 400,
    });

    render(<ReturnToTop />);
    fireEvent.scroll(window);

    const button = screen.getByLabelText('Back to top');
    // The ChevronUp icon should be present as a child element
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('should cleanup scroll event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = render(<ReturnToTop />);

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    removeEventListenerSpy.mockRestore();
  });

  it('should have correct styling classes on button', () => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 400,
    });

    render(<ReturnToTop />);
    fireEvent.scroll(window);

    const button = screen.getByLabelText('Back to top');
    expect(button).toHaveClass(
      'group',
      'relative',
      'flex',
      'h-14',
      'w-14',
      'items-center',
      'justify-center',
      'rounded-full',
      'border',
      'border-violet-400/45',
      'bg-zinc-950/80',
      'text-violet-300'
    );
  });
});
