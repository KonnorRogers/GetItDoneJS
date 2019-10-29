import {pipe} from '../utils/pipe.js';

import {withDescription} from './itemMixins/withDescription.js';
import {withFinished} from './itemMixins/withFinished.js';
import {withPriority} from './itemMixins/withPriority.js';
import {withLabels} from './itemMixins/withLabels.js';
import {withStartDate} from './itemMixins/withStartDate.js';
import {withEndDate} from './itemMixins/withEndDate.js';
import {withNotes} from './itemMixins/withNotes.js';
import {withTitle} from './itemMixins/withTitle.js';

/**
 * The default item mixin. It provides all the functionality for both Projects and Tasks.
 * This is not meant to be used directly
 *
 * @param {Object} [props = {}] - Properties of the item, IE: description, finished, priority etc
 * @return {Function({Object}) - Returns {Function} which will accept an {Object} parameter
 */
export default (props = {}) => obj => {
  return Object.assign(
    obj,
    pipe(
      withDescription(props.description),
      withFinished(props.finished),
      withPriority(props.priority),
      withLabels(props.labels),
      withStartDate(props.startDate),
      withEndDate(props.endDate),
      withNotes(props.notes),
      withTitle(props.title),
    )({}),
  );
};
