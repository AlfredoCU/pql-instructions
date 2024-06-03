import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";

import usePageLoader from "@/utils/hooks/usePageLoader";

jest.useFakeTimers();

jest.spyOn(global, "clearTimeout");

describe("usePageLoader hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should set loading to false initially", () => {
    const { result } = renderHook(() => usePageLoader());
    const [loading] = result.current;

    expect(loading).toBe(false);
  });

  it("should set loading to true after the specified time", () => {
    const { result } = renderHook(() => usePageLoader(1000));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const [loading] = result.current;

    expect(loading).toBe(true);
  });

  it("should allow setting custom initial loading state", () => {
    const { result } = renderHook(() => usePageLoader(1000, true));
    const [loading] = result.current;

    expect(loading).toBe(true);
  });

  it("should clean up the timer on unmount", () => {
    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });
});
