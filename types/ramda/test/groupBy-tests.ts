import * as R from 'ramda';

() => {
  const byGrade = R.groupBy((student: { score: number; name: string }) => {
    const score = student.score;
    return score < 65
      ? 'F'
      : score < 70
      ? 'D'
      : score < 80
      ? 'C'
      : score < 90
      ? 'B'
      : 'A';
  });
  const byQuartile = R.groupBy((student: { score: number; name: string }) => {
    const score = student.score;
    return score < 25
      ? 1
      : score < 50
      ? 2
      : score < 75
      ? 3
      : 4;
  });
  const symbols = [Symbol(), Symbol()];
  const bySymbol = R.groupBy((student: { score: number; name: string }) => {
    const score = student.score;
    return score < 50 ? symbols[0] : symbols[1];
  });

  const students = [
    { name: 'Abby', score: 84 },
    { name: 'Eddy', score: 58 },
    { name: 'Jack', score: 69 },
  ];
  byGrade(students);
  byQuartile(students);
  bySymbol(students);
};
