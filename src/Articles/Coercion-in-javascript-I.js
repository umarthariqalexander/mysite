import React from 'react'
import { MainHeading, SubHeading, SmallSubHeading, Content, CodeSnippet, ArticleOrderedList, ArticleEnd } from '../Components/ArticleView';

export default ()=>{
  return (
    <div>
      <MainHeading>Learn Coercion in Javascript - I</MainHeading>
      <SubHeading>Introduction</SubHeading>
      <Content>
      Coercion is an unexpected type-casting by javascript, happening because of it's "Weakly typed" nature. It is very crucial to know about Coercion, as we are using this every day of coding life without the knowledge of what happening under the hood.
      </Content>
      <div className="m-30"></div>
      <SmallSubHeading>Coercion can convert the operands only in 3 different types,</SmallSubHeading>
    <ArticleOrderedList>
        <li>Number</li>
        <li>String</li>
        <li>Boolean</li>
    </ArticleOrderedList>
    <div className="m-30"></div>
    <SmallSubHeading>There are two different types of Coercion is there,</SmallSubHeading>
    <ArticleOrderedList>
        <li>Explicit - Intentionally using any one of these methods: Number(), Boolean() and String()</li>
        <li>Implicit - By Default</li>
    </ArticleOrderedList>
    <div className="paragraph-break"></div>
    <SubHeading>
        Double Equals '==' vs Triple Equals '==='
    </SubHeading>
    <Content>
    Usually, to compare two different variables we use any of these operators. Double equals (==) test for those variables loose equality and perform type coercion implicitly if needed. It doesn't triggers the implicit numeric type conversion if both operands are String type. 
    </Content>
    <div className="m-30"></div>
    <Content>
    But in case of triple equals (===) without doing implicit type coercion, It strictly checks variables type before comparing the variable values.
    </Content>
    <div className="m-30"></div>
    <CodeSnippet>
    {`    
    3 == "3" //true 
    `}
    </CodeSnippet>
    <Content>
    so here == operator triggers the implicit numeric type conversion on "3". Hence 3 == 3 so the result is true.
    </Content>
    <div className="m-30"></div>
    <CodeSnippet>
    {`    
    3 === "3" //false
    `}
    </CodeSnippet>
    <Content>
    But === doesn’t trigger any implicit type conversion So it will be false as both the side have different value types.
    </Content>
    <div className="m-30"></div>
    <CodeSnippet>
    {`    
    false == 0 // true
    `}
    </CodeSnippet>
    <Content>
    Here implicit type coercion of Boolean type false (Number(false)) will be output as 0.          
    Hence 0 == 0 will be true.
    </Content>
    <div className="m-30"></div>
    <CodeSnippet>
    {`    
    false === 0 //false
    `}
    </CodeSnippet>
    <Content>
    Here too the same as the above case automatically the result will be false.
    </Content>
    <div className="paragraph-break"></div>
    <SubHeading>Addition '+' vs subtraction '-'</SubHeading>
    <Content><b>'+'</b> operator checks if anyone operand type is <b>String</b>, then it will implicitly type coerce another operand also into <b>String</b>.</Content>
    <CodeSnippet>
    {`    
    33 + "3"    //"333"
    `}
    </CodeSnippet>
    <div className="m-30"></div>
    <Content><b>'-'</b> (minus) operator will always perform numeric type conversion.</Content>
    <CodeSnippet>
    {`    
    33 - "3"    // 30 
    `}
    </CodeSnippet>
    <div className="paragraph-break"></div>
    <SubHeading>Conclusion</SubHeading>
    <Content>
    We get the knowledge of how type coercions are happening implicitly when we use addition and subtraction operators. We will learn more about how type coercions are happening on Objects in the next part of this article.
    </Content>
    <ArticleEnd/>
    </div>
  )
}
