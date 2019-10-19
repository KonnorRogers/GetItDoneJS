/**
 * The base item including title, description, startDate, etc
 * @typedef {Object} Item
 */
export default function Item(props = {}) {
  /**
   * Initializes an Item object with the given properties
   * @param {Object} [props = {}] props - Properties of the item.
   * @param {string} [props.title = ''] props.title - The title of the item.
   * @param {string} [props.description = ''] props.description - Description of the item.
   * @param {null|Date} [props.startDate = null] props.startDate - Optional startDate of the item.
   * @param {null|Date} [props.endDate = null] props.endDate - Optional endDate of the item.
   * @param {number} [props.priority = 0] props.priority - Priority of the item.
   * @param {Array} [props.labels = []] props.labels - An array of strings of various labels.
   * @param {Array} [props.notes = []] props.notes - An array of strings containing notes for the item.
   * @param {Boolean} [props.finished = false] props.finished - Whether or not the item has been completed.
   * @return {Object} Returns an Object to be extended.
   */
  return Object.assign(
    {},
    {
      title: '',
      description: '',
      startDate: null,
      endDate: null,
      priority: 0,
      labels: [],
      notes: [],
      finished: false,
    },
    props,
  );
}
