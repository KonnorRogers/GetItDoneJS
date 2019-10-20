import {pipe} from '../utils/pipe.js';

import {withDescription} from './withDescription.js';
import {withFinished} from './withFinished.js';
import {withPriority} from './withPriority.js';
import {withLabels} from './withLabels.js';
import {withStartDate} from './withStartDate.js';
import {withEndDate} from './withEndDate.js';
import {withNotes} from './withNotes.js';
import {withTitle} from './withTitle.js';

export default (props = {}) => obj => {
  return pipe(
    withDescription({description: props.description}),
    withFinished({finished: props.finished}),
    withPriority({priority: props.priority}),
    withLabels({labels: props.labels}),
    withStartDate({startDate: props.startDate}),
    withEndDate({endDate: props.endDate}),
    withNotes({notes: props.notes}),
    withTitle({title: props.title}),
  )({});
};
