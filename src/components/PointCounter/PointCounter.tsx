export const PointCounter = ({
  pointsSpent,
  maxPoints,
}: {
  pointsSpent: number;
  maxPoints: number;
}) => {
  return (
    <div>
      <p data-cy="pointsSpent">{pointsSpent}</p>/
      <p data-cy="maxPoints">{maxPoints}</p> <p>Points Spent</p>
    </div>
  );
};
