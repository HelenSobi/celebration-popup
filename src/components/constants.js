export const numberWithCommas=(x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

export const getPercentage=(achievedScore, totalScore) => {
    return Math.round((achievedScore / totalScore) * 100);
}