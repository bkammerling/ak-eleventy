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
          h('strong', {}, section.getIn(['data', 'title']))
        );
      })
      );
    }
});

export default Page;
