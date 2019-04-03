import React from 'react';
import {Link} from 'react-router-dom';
import { MainHeading, SubHeading, SmallSubHeading, Content, CodeSnippet, ArticleUnOrderedList,ArticleOrderedList, ArticleEnd } from '../Components/ArticleView';

export default () => {
  return (
    <div>
      <MainHeading>Learn Corecion in Javascript - II</MainHeading>
      <SubHeading>Introduction</SubHeading>
      <Content>In this article, We going to learn how type coercion is working on Object types of Javascript. This article is the continuation of the <Link to={{pathname: "/article/Coercion-in-javascript-I", state: {articleUrl:'Coercion-in-javascript-I'}}}>part-I</Link>, where we learnt how type coercion is working on normal comparisons, Addition and Subtraction operations. </Content>
      <div className="paragraph-break"></div>
      <SubHeading>Implicit Type Coercion on the Objects</SubHeading>
      <div className="m-20"></div>
      <SmallSubHeading>
      In Objects, Type coercion implicitly call the default methods of Object.prototype. Those are,
      </SmallSubHeading>
        <ArticleUnOrderedList>
            <li>valueOf()</li>
            <li>toString()</li>
        </ArticleUnOrderedList>
        <div className="m-20"></div>
        <SmallSubHeading>
            The order of calling these methods will differ based on the type conversion.
        </SmallSubHeading>
        <div className="m-40"></div>
        <SmallSubHeading>
            If it is Numeric type conversion then order will be,
        </SmallSubHeading>
        <ArticleOrderedList>
            <li>Calls the valueOf() method if the result is primitive then return or else fallback to next method</li>
            <li>Calls the toString() method</li>
        </ArticleOrderedList>
        <SmallSubHeading>But in the case of String type conversion it will be reverse order.</SmallSubHeading>
        <div className="paragraph-break"></div>
        <SubHeading>Object comparison</SubHeading>
        <Content>If both the operands are object type then it checks for object identity instead of object equality.</Content>
        <CodeSnippet>
        {`    
    {} == {}    //false

    [ ] == [ ]  //false 
        `}
        </CodeSnippet>
        <Content>Because both of them are different instances of the object.</Content>
        <div className="m-30"></div>
        <Content>If one of the operands is different type rather than object type,</Content>
        <CodeSnippet>
        {`    
    [1] == "1" //true
        `}
        </CodeSnippet>
        <SmallSubHeading>LHS is Object type so will follow numeric type conversion order on this as mentioned above,</SmallSubHeading>
        <CodeSnippet>
        {`    
    [1].valueOf().toString()  // "1"
        `}
        </CodeSnippet>
        <SmallSubHeading>Hence,</SmallSubHeading>
        <CodeSnippet>
        {`    
    "1" == "1" //true
        `}
        </CodeSnippet>
        <div className="paragraph-break"></div>
        <SubHeading>Object Addition / Subtraction</SubHeading>
        <CodeSnippet>
        {`    
    [1,2,3] + [4,5,6] // "1,2,34,5,6"
        `}
    </CodeSnippet>
    <Content>
    Here neither of the operands are String, So <b>+</b> will apply the numeric type conversion on both the operands. 
    </Content>
    <CodeSnippet>
        {`    
    [1,2,3].valueOf().toString() // "1,2,3"

    [4,5,6].valueOf().toString() // "4,5,6"
    
    "1,2,3" + "4,5,6"            // "1,2,34,5,6"
        `}
    </CodeSnippet>
    <Content>In Subtraction same like above,</Content>
    <CodeSnippet>
        {`    
    [1,2,3] - [4,5,6]

    [1,2,3].valueOf().toString() // "1,2,3"

    [4,5,6].valueOf().toString() // "4,5,6"
    
    "1,2,3" - "4,5,6"            // NaN
        `}
    </CodeSnippet>
    <div className="paragraph-break"></div>
    <SubHeading>Conclusion</SubHeading>
    <Content>
    Hence these many things are happening under the hood of Javascript engine when we do the comparison or any other arithmetic operations like above. So we have to understand what’s happening inside before doing those things. The most safer side is to include 'use strict' mode in your javascript code base or use triple equals '===' for the comparisons.
    </Content>
        <ArticleEnd/>
    </div>
  )
}
