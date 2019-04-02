import React from 'react'
import { MainHeading, SubHeading, Content } from '../Components/ArticleView';

export default function ObjectEnumeration() {
  return (
    <div>
        <MainHeading>Object enumeration in Javascript</MainHeading>
        <SubHeading>Introduction</SubHeading>
        <Content>
            Unlike Array's for loop or map/forEach methods, Objects don't have any direct methods to enumerate the
            object properties. And moreover object properties hold different values for keys.
        </Content>
        <SubHeading>ES5 - (Object.entries and forEach)</SubHeading>
        <div>
          <code className="code-snippet">
            <pre>
             {`
  var obj = {a: 'apple', b: 'ball', 'c': 'cat'};

  Object.keys(obj).forEach((item)=>{
    console.log(obj[item]);    // apple, ball, cat
  });
             `}
            </pre>
          </code>
        </div>
    </div>
  )
}
