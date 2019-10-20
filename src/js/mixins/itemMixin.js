import {pipe} from '../utils/pipe.js';

import {withDescription} from './itemMixins/withDescription.js';
import {withFinished} from './itemMixins/withFinished.js';
import {withPriority} from './itemMixins/withPriority.js';
import {withLabels} from './itemMixins/withLabels.js';
import {withStartDate} from './itemMixins/withStartDate.js';
import {withEndDate} from './itemMixins/withEndDate.js';
import {withNotes} from './itemMixins/withNotes.js';
import {withTitle} from './itemMixins/withTitle.js';

export default (props = {}) => obj => {
  return Object.assign(
    obj,
    pipe(
      withDescription({description: props.description}),
      withFinished({finished: props.finished}),
      withPriority({priority: props.priority}),
      withLabels({labels: props.labels}),
      withStartDate({startDate: props.startDate}),
      withEndDate({endDate: props.endDate}),
      withNotes({notes: props.notes}),
      withTitle({title: props.title}),
    )({}),
  );
};
