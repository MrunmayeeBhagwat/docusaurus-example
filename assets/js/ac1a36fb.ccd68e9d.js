"use strict";(self.webpackChunkdocusaurus_example=self.webpackChunkdocusaurus_example||[]).push([[722],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),g=r,d=h["".concat(l,".").concat(g)]||h[g]||c[g]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8986:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return c},toc:function(){return h},Highlight:function(){return g},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(9524),s=["components"],l={title:"Testing API- The Basics",authors:["Mrunmayee"],image:"/img/api.jpg"},u=void 0,p={permalink:"/docusaurus-example/blog/2022/06/23/api-testing",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-06-23-api-testing/index.mdx",source:"@site/blog/2022-06-23-api-testing/index.mdx",title:"Testing API- The Basics",description:"<img src={useBaseUrl('img/api.jpg')} alt=\"Example banner\"",date:"2022-06-23T00:00:00.000Z",formattedDate:"June 23, 2022",tags:[],readingTime:5.8,truncated:!0,authors:[{name:"Mrunmayee Bhagwat",title:"Software Engineer",url:"https://github.com/MrunmayeeBhagwat",imageURL:"https://avatars.githubusercontent.com/u/98544107?v=4",key:"Mrunmayee"}],frontMatter:{title:"Testing API- The Basics",authors:["Mrunmayee"],image:"/img/api.jpg"}},c={authorsImageUrls:[void 0]},h=[{value:'<Highlight color="#039dfc">What is an API?</Highlight>',id:"what-is-an-api",level:3},{value:'<Highlight color="#039dfc">Why is it Important to Test APIs?</Highlight>',id:"why-is-it-important-to-test-apis",level:3},{value:'<Highlight color="#039dfc">Types of testing</Highlight>',id:"types-of-testing",level:3},{value:'<Highlight color="#039dfc"> How to Perform Testing on your API </Highlight>',id:"-how-to-perform-testing-on-your-api-",level:3}],g=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#17202A",padding:"0.2rem"}},t)},d={toc:h,Highlight:g};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:(0,i.Z)("img/api.jpg"),alt:"Example banner",width:"50%"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"API"),", or ",(0,o.kt)("strong",{parentName:"p"},"Application Programming Interface"),", is a set of rules that governs how two separate pieces of software interact. When one piece of software makes a request to the other, it can be said that they are calling an API. More often than not, the interface is the front-facing part of one program, and the back-end part of another - meaning that APIs serve as the bridge between two different applications or systems."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"what-is-an-api"},(0,o.kt)(g,{color:"#039dfc",mdxType:"Highlight"},"What is an API?")),(0,o.kt)("p",null,"An API, or application programming interface, is a set of tools and protocols that allow software applications to interact with each other. In the context of testing, an API can be used to verify that two different applications are able to communicate with each other correctly. This is done by sending requests from one application to another and checking that the responses are as expected.\nAPI testing is a type of software testing that focuses on verifying the functionality of API calls. This includes testing for correct input and output, as well as error handling. API tests can be performed manually or automated. Automated API tests are often run as part of a continuous integration or delivery process.\nWhen writing API tests, it is important to consider what needs to be tested. This will vary depending on the application and the specific API being used. Some things that may need to be considered include:"),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"Functionality"),": Are all API calls working as expected?",(0,o.kt)("br",null),"\n-",(0,o.kt)("strong",{parentName:"p"},"Performance"),": How fast do the API calls execute?",(0,o.kt)("br",null),"\n-",(0,o.kt)("strong",{parentName:"p"},"Security"),": Are the API calls secure?",(0,o.kt)("br",null),"\n-",(0,o.kt)("strong",{parentName:"p"},"Error Handling"),": What happens if an error is encountered during an API call?",(0,o.kt)("br",null)),(0,o.kt)("p",null,"API testing is a vital part of any software development process. It helps to ensure that applications are"),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"why-is-it-important-to-test-apis"},(0,o.kt)(g,{color:"#039dfc",mdxType:"Highlight"},"Why is it Important to Test APIs?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"API testing")," is a type of software testing that involves testing application programming interfaces (APIs) to determine if they meet expectations for functionality, reliability, performance, and security. Since APIs are designed to be used by other software programs, they need to be tested to ensure that they function as intended.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"API testing can be conducted manually or automated. Automated API testing is generally considered to be more efficient and effective than manual testing, as it can cover a larger range of scenarios in a shorter amount of time. In addition, automated tests can be run more frequently than manual tests, making them well-suited for continuous integration and delivery (CI/CD) pipelines.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"Language independent"),": APIs use formats such as XML and JSON to exchange data. This means they are language independent so you can use any language to create testing automation.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"GUI independent"),": APIs can be tested without a user interface to check the application\u2019s core functionality and to find errors and bugs.",(0,o.kt)("br",null),"\nImproved test coverage: APIs include features that let you create automation scripts with greater coverage."),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"Reduce cost of testing"),": Testing APIs helps you to find small bugs in the core functions before being tested in the GUI. These small bugs can potentially become big problems during GUI testing, so if you can find and fix bugs during API testing it saves you time and money.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"Faster product release"),": API testing typically takes a fraction of the time it takes to perform complete UI regression testing. So errors can be found and fixed faster and more efficiently and new builds can be released faster.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"Determine whether the APIs work properly"),": Your testing helps you to ensure that the API does what you expect it to do.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"Ensure APIs can handle the load"),": Run tests that apply the amount of traffic you expect your APIs to handle. It\u2019s a way to simulate multiple users sending simultaneous requests to see how robust your application is.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"Test compatibility"),": Your testing should ensure that your API can work with all devices, browsers, and operating systems.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"-",(0,o.kt)("strong",{parentName:"p"},"Anticipate user errors"),": Testing can help you to find ways that users can potentially mess up. This information can help you to anticipate user errors and improve your design.",(0,o.kt)("br",null)),(0,o.kt)("h3",{id:"types-of-testing"},(0,o.kt)(g,{color:"#039dfc",mdxType:"Highlight"},"Types of testing")),(0,o.kt)("br",null),(0,o.kt)("p",null,"There are various types of testing that can be carried out on an API. The most common are unit testing, functional testing, and load testing. Each type of test has its own purpose and can be used to test different aspects of the API."),(0,o.kt)("p",null,"\u25ba",(0,o.kt)("strong",{parentName:"p"},"Functional test"),": Tests different functions in the codebase. The tests represent specific scenarios to ensure that the API functions work within the planned and expected parameters."),(0,o.kt)("p",null,"\u25ba",(0,o.kt)("strong",{parentName:"p"},"Reliability test"),": This type of test verifies that the API can operate without failures during a specific amount of time in a specific environment."),(0,o.kt)("p",null,"\u25ba",(0,o.kt)("strong",{parentName:"p"},"Load test"),": This test monitors the API\u2019s performance during normal and peak conditions.\nSecurity test: Used to ensure that the API is secure against external threats. The tests include encryption methodologies, API access control, user rights management, and authorization validation."),(0,o.kt)("p",null,"\u25ba",(0,o.kt)("strong",{parentName:"p"},"UI test"),": This involves testing the API\u2019s user interface. It\u2019s focus is on the interface that ties into the API rather than testing the API itself. UI tests can give you an overview of the app\u2019s health and usability on the front and back ends."),(0,o.kt)("p",null,"\u25ba",(0,o.kt)("strong",{parentName:"p"},"Negative test"),": The purpose of negative testing is to see what happens when the app receives invalid or unintentional input. You are trying to find out what will break the system so you can develop more appropriate responses. For example, entering a letter in a number field should trigger a warning message and should not cause the app to crash."),(0,o.kt)("p",null,"\u25ba",(0,o.kt)("strong",{parentName:"p"},"Validation test"),": This type of testing is used to verify that the API has been developed correctly and that everything works."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"-how-to-perform-testing-on-your-api-"},(0,o.kt)(g,{color:"#039dfc",mdxType:"Highlight"}," How to Perform Testing on your API ")),(0,o.kt)("p",null,"API testing is a vital part of ensuring the quality of your software. In this blog post, we'll cover the basics of API testing and how you can go about performing tests on your own API."),(0,o.kt)("p",null,"API testing can be performed in a number of ways, but one common method is to use a tool like SoapUI or Postman to send requests to the API and assert that the responses are as expected. Another popular method is to use a unit testing framework like JUnit or TestNG to write test cases for your API."),(0,o.kt)("p",null,"Whichever approach you choose, there are a few key things to keep in mind when performing API tests:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure you test all aspects of the API, including both positive and negative scenarios."),(0,o.kt)("li",{parentName:"ol"},"Pay attention to error handling and ensure that the API behaves as expected when errors occur."),(0,o.kt)("li",{parentName:"ol"},"Performance is crucial for APIs, so make sure to test how the API responds under load."),(0,o.kt)("li",{parentName:"ol"},"Security is also important, so be sure to test for things like SQL injection and cross-site scripting attacks.")))}f.isMDXComponent=!0}}]);