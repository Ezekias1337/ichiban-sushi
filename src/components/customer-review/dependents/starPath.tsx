// Library Imports
import { FC } from "react";

interface StarPathProps {
  className: string;
  fill: string;
  fillPercentage: number;
  starSvgPath: string;
}

const calculatePath = (
  percentage: number,
  starSvgPath: string
): React.ReactNode => {
  const filledStarColor = "#f1786f";
  const emptyStarColor = "#a7acb4";
  const fillPercentage = Math.min(100, Math.max(0, percentage));

  // Calculate the width of the filled portion
  const filledWidth = (543 * fillPercentage) / 100;

  // Create a path for the filled part with gray on the right
  const filledPath = `
      M543 0
      L${filledWidth} 0
      L${filledWidth} 512
      L543 512
      Z
    `;

  return (
    <>
      <defs>
        <clipPath id="star-clip">
          <path d={filledPath} />
        </clipPath>
      </defs>
      <path d={starSvgPath} fill={filledStarColor} />
      <path d={starSvgPath} fill={emptyStarColor} clipPath="url(#star-clip)" />
    </>
  );
};

export const StarPath: FC<StarPathProps> = ({
  fillPercentage,
  starSvgPath,
}) => {
  return calculatePath(fillPercentage, starSvgPath);
};
