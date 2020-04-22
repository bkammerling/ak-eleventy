import htm from "https://unpkg.com/htm?module";

// Preview component for a Page
const Page = createClass({
  render: function() {
      var entry = this.props.entry;
      var sections = entry.getIn(['data', 'page_sections']);
      console.log(sections);
      return h('div', {},
        h('h4', {}, entry.getIn(['data', 'title'])),
        h('h2', {}, entry.getIn(['data', 'subtitle'])),
        h('div', {"className": "text"}, this.props.widgetFor('body')),
        this.props.widgetsFor('page_sections').map(function(section, index) {
          var cols = section.getIn(['data', 'cols']);
          console.log(cols);
          var returned;
          try {
            section.getIn(['data', 'cols']).map(function(col, index) {
              returned = h('div', {"className": "text"}, col);
            })
          } catch(e) {
            console.log(e);
          }
          try {
            var md = window.markdownit();
            var options = {
              html: true,
              breaks: true,
              linkify: true
            };
            section.getIn(['data', 'cols']).map(function(col, index) {
              returned = md.render(col);
            })
          } catch(e) {
            console.log(e);
          }
          return returned;
          return h('div', {key: index},
            h('hr', {}),
            h('strong', {}, section.getIn(['data', 'title'])),
            this.props.widgetsFor(section.getIn(['data', 'cols'])).map(function(col, indexC) {
              return col.getIn(['widgets', 'colbody']);
            })
          );
        }, this)
      );
    }
});

export default Page;
