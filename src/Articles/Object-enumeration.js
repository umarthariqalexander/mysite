import React from 'react'
import { MainHeading, SubHeading, Content, CodeSnippet, ArticleEnd } from '../Components/ArticleView';

export default function ObjectEnumeration() {
  return (
    <div>
        <MainHeading>Object enumeration in Javascript</MainHeading>
        <SubHeading>Introduction</SubHeading>
        <Content>
            Unlike Array's for loop or map/forEach methods, Objects don't have any direct methods to enumerate the
            object properties. And moreover, Object properties hold different values for keys.
        </Content>
        <div className="paragraph-break"></div>
        <SubHeading>ES5 - (Object.entries and forEach)</SubHeading>
        <CodeSnippet>  {`
  var obj = {a: 'apple', b: 'ball', 'c': 'cat'};

  Object.keys(obj).forEach((item)=>{
    console.log(obj[item]);                           // apple, ball, cat
  });
  `}
        </CodeSnippet>
        <div className="paragraph-break"></div>
        <SubHeading>ES6 - for of() method</SubHeading>
        <CodeSnippet>  {`
  var obj = {a: 'apple', b: 'ball', 'c': 'cat'};

  for(let key of Object.keys(obj)){
      console.log(obj[key]);                          // apple, ball, car
  }
  `}
        </CodeSnippet>
        <div className="paragraph-break"></div>
        <SubHeading>ECMA 2017 - Object.entries() method</SubHeading>
        <CodeSnippet>  {`
  var obj = {a: 'apple', b: 'ball', 'c': 'cat'};

  Object.entries(obj).forEach(([key, value])=>{
      console.log(key); console.log(value);           // a apple, b ball, c cat
  });
  `}
        </CodeSnippet>
    <ArticleEnd/>
    </div>
  )
}
