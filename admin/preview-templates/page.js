import htm from "https://unpkg.com/htm?module";

// Preview component for a Page
const Page = createClass({
  render: function() {
      var entry = this.props.entry;
      var sections = entry.getIn(['data', 'page_sections']);
      return h('div', {},
        h('h4', {}, entry.getIn(['data', 'title'])),
        h('h2', {}, entry.getIn(['data', 'subtitle'])),
        h('div', {"className": "text"}, this.props.widgetFor('body')),
        this.props.widgetsFor('page_sections').map(function(section, index) {
          return h('div', {key: index},
            h('hr', {}),
            h('strong', {}, section.getIn(['data', 'title'])),
            this.props.widgetsFor(section.cols).map(function(col, indexC) {
              return col.getIn(['widgets', 'colbody']);
          );
        }, this)
      );
    }
});

export default Page;
