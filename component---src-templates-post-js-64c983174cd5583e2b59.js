(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6qSS":function(e,t,a){"use strict";a.r(t),a.d(t,"postQuery",(function(){return s}));var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),i=a("Bl7J");var o=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.wordpressPost,t=this.props.data.allWordpressPost.edges.filter((function(t){return t.node.id===e.id})),a=t?t[0].previous:"",r=t?t[0].next:"";return n.a.createElement(i.a,null,n.a.createElement("h1",null,e.title),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}),n.a.createElement((function(){return a?n.a.createElement("div",null,"Next: ",n.a.createElement(l.Link,{to:a.slug},a.title)):""}),null),n.a.createElement("br",null),n.a.createElement((function(){return r?n.a.createElement("div",null,"Previous: ",n.a.createElement(l.Link,{to:r.slug},r.title)):""}),null),n.a.createElement("br",null))},r}(r.Component);t.default=o;var s="2205145364"},Bl7J:function(e,t,a){"use strict";var r=a("sjIX"),n=a("q1tI"),l=a.n(n),i=a("Wbzz"),o=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.defaultProps={siteTitle:""};var s=o;a("8ypT"),t.a=function(e){var t=e.children,a=r.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{siteTitle:a.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("footer",null,"© ",(new Date).getFullYear()," ",a.site.siteMetadata.title,", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},sjIX:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Self::starter","author":"Nicholas Shellabarger"}}}}')}}]);
//# sourceMappingURL=component---src-templates-post-js-64c983174cd5583e2b59.js.map