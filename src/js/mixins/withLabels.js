export const withLabels = ({labels = []}) => obj => {
  const getLabels = () => labels;
  const addLabel = label => labels.push(label);
  return {
    ...obj,
    addLabel,
    getLabels,
  };
};
