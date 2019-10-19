export default function Item() {
  const init = (props = {}) => {
    Object.assign(
      {},
      {
        title: '',
        description: '',
        comments: [],
        labels: [],
        startDate: '',
        endDate: '',
        notes: [],
        finished: false,
      },
      props,
    );
  };
  return {init};
}
