import React from 'react';
import { MainHeading, SubHeading, SmallSubHeading, Content, CodeSnippet, ArticleUnOrderedList,ArticleOrderedList, ArticleEnd } from '../Components/ArticleView';

export default () => {
  return (
    <div>
      <MainHeading>Learn Corecion in Javascript - II</MainHeading>
      <SubHeading>Introduction</SubHeading>
      <Content>In this article, We going to learn how type coercion is working on Object types of Javascript. This one is the continuation of the part-I, where we learnt how type coercion is working on Addition and Subtraction operators. </Content>
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
        <SubHeading>Object comparisions</SubHeading>
        <Content>if both the operands are object type then it checks for object identity instead of object equality.</Content>
        <CodeSnippet>
        {`    
    {} == {}    //false

    [ ] == [ ]  //false 
        `}
        </CodeSnippet>
        <Content>Because both of them are different instances of the object.</Content>
    </div>
  )
}
