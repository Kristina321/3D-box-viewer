import { useState, useCallback} from "react";

export function useApp() {
  const [size, setSize] = useState(1);
  const stepZoom = 0.25;
  const maxZoom = 4;
  const minZoom = 0.25;

  const handleZoomIn = useCallback(() => {
    if (size < maxZoom) {
      setSize(size + stepZoom);
      return true;
    } else {
      return false;
    }
  }, [size]);

  const handleZoomOut = useCallback(() => {
    if (size > minZoom) {
      setSize(size - stepZoom);
      return true;
    } else {
      return false;
    }
  }, [size]);

  const handleWheel = useCallback((event) => {
    event.preventDefault();

    const zoomWheel = event.deltaY < 0 ? handleZoomIn : handleZoomOut;

    if (!zoomWheel()) event.stopPropagation();;
  }, [handleZoomIn, handleZoomOut]);

  return {
    size,
    handleZoomIn,
    handleZoomOut,
    handleWheel,
  }
}
