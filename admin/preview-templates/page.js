import htm from "https://unpkg.com/htm?module";

// Preview component for a Page
const Page = createClass({
  render: function() {
      var entry = this.props.entry;
      var sections = entry.getIn(['data', 'page_sections']);
      return h('div', {},
        h('h3', {}, entry.getIn(['data', 'title'])),
        h('h1', {}, entry.getIn(['data', 'subtitle'])),
        h('div', {"className": "text"}, this.props.widgetFor('body')),
        this.props.widgetsFor('page_sections').map(function(section, index) {
        return h('div', {key: index},
          h('hr', {}),
          h('strong', {}, section.getIn(['data', 'title'])),
          h('div', {}, this.props.widgetsFor('sections').getIn(['data', 'cols']) || 'None')
          );
        }, this)
      );
    }
});

export default Page;
