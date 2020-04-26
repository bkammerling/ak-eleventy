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
          if(section.getIn(['data', 'type']) == 'content') {
            if(section.getIn(['data', 'title'])) {
              return h('div', {key: index},
                h('hr', {}),
                h('h3', {"className": "text-uppercase"}, section.getIn(['data', 'title'])),
                h('p', {}, ' - ' + section.getIn(['data', 'id']))
              );
            } else {
              //no title in section - its a sub section
              return h('div', {key: index},
                h('p', {}, ' - ' + section.getIn(['data', 'id']))
              );
            }
          } else {
            var image = section.getIn(['data', 'image']);
            var bg = this.props.getAsset(image);
            return h('div', {key: index},
              h('img', {"className": "mw-100", src: bg.toString()})
            );
          }
        }, this)
      );
    }
});

export default Page;
