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
          return (
            try {
              this.props.widgetsFor('cols').map(function(col, indexCo) {
                return col;
              })
            } catch(e) {
              console.log(e);
            }
            try {
              section.getIn(['data', 'cols']).map(function(col, index) {
                return col;
              })
            } catch(e) {
              console.log(e);
            }
            try {
              section.getIn(['data', 'cols']).map(function(col, index) {
                return this.props.widgetFor('col');
              })
            } catch(e) {
              console.log(e);
            }
          );
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
