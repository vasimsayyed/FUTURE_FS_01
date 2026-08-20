import { useMotionValue, useSpring, useTransform } from 'framer-motion';

export function useTilt({ maxTilt = 15, springConfig = { stiffness: 300, damping: 20 } } = {}) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clientX = event.clientX - rect.left;
    const clientY = event.clientY - rect.top;

    x.set(clientX / rect.width);
    y.set(clientY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return {
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave,
    rawX: x,
    rawY: y
  };
}
