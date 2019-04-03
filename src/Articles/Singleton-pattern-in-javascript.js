import React from 'react'
import { MainHeading, SubHeading, SmallSubHeading, Content, CodeSnippet,ArticleOrderedList, ArticleEnd } from '../Components/ArticleView';

export default () => {
  return (
    <div>
      <MainHeading>Singleton pattern in Javascript</MainHeading>
      <SubHeading>Introduction</SubHeading>
      <Content>Singleton is one of the simplest design pattern, which allows a single instance of the class/object to be created.</Content>
      <div className="paragraph-break"></div>
      <SmallSubHeading>Examples:</SmallSubHeading>
      <ArticleOrderedList>
          <li>In AngularJS, will create a single instance of a service/factory methods to make API calls.</li>
          <li>In NodeJS, when we trying to execute multiple <b>CRUD</b> operations on the same database will create a single instance for that Database to accomplish all the operations.</li>
      </ArticleOrderedList>
      <div className="paragraph-break"></div>
      <SubHeading>Definition</SubHeading>
      <Content>
      A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and in this way, one can ensure that they don't accidentally create, say, two users in a single user application.
      </Content>
      <CodeSnippet>
        {`    
    var User = ( function() {             // Self Invoking function
    
        
    var instance;


    function createUser() {

        var user = new Object({firstName: 'John', age: 25});

        return user;

    }


    var editUser = function (newName) {

        instance.firstName = newName;

        return instance;
    }


    return {

        getUser : function() {

                    if(!instance) {

                        instance = createUser(); 

                    }

                    return instance;

        },

        editUser: editUser

    };})();


    var user1 = User.getUser();

    var user2 = User.getUser();

    document.write(user1 === user2); // True; Because Both the object instance are same.

    document.write(user1.firstName); // John

    document.write(user2.firstName); // John

    User.editUser('Mark');           // Edit the User object property

    document.write(user1.firstName); // Mark

    document.write(user2.firstName); // Mark
        `}
        </CodeSnippet>
        <ArticleEnd/>
    </div>
  )
}
