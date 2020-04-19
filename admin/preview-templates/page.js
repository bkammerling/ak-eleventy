import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <h1>${entry.getIn(["data", "title"], null)}</h1>
        <h2>${entry.getIn(["data", "subtitle"], null)}</h2>

        ${this.props.widgetFor("body")}

        ${this.props.widgetsFor("page_sections").map(function(section, index) {
          return `<div><h3>${section.title}</h3>
          ${section.cols.map(function(col, index) {
            return col.body;
          })}
          </div>
          `
        })}

      </main>
    `;
  }
});

export default Page;
