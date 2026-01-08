import '@testing-library/jest-dom';

// Simple IntersectionObserver mock for JSDOM tests (used by framer-motion)
class IntersectionObserverMock {
  constructor() {}
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
}

// @ts-ignore
global.IntersectionObserver = global.IntersectionObserver || IntersectionObserverMock;
