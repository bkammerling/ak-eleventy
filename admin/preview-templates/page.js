import htm from "https://unpkg.com/htm?module";

// Preview component for a Page
const Page = createClass({
  render: function() {
      var entry = this.props.entry;
      return h('div', {},
        h('h3', {}, entry.getIn(['data', 'title'])),
        h('h1', {}, entry.getIn(['data', 'subtitle'])),
        h('div', {"className": "text"}, this.props.widgetFor('body')),
        this.props.widgetsFor('page_sections').map(function(section, index) {
        return h('div', {key: index},
          h('hr', {}),
          h('strong', {}, section.getIn(['data', 'title'])),
          h('div', {"className": "text"}, this.props.widgetFor(section.getIn(['data', 'prebody']))),
          section.getIn(['data', 'cols']).map(function(col, index) {
            return h('div', {}, this.props.widgetFor(col));
          }, this),
          h('div', {}, this.props.widgetFor(section.getIn(['data', 'postbody'])))
          );
        })
      );
    }
});

export default Page;
