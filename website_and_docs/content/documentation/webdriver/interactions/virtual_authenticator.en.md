---
title: "Virtual Authenticator"
linkTitle: "Virtual Authenticator"
weight: 16
description: >
    A representation of the Web Authenticator model.
aliases: [
"/documentation/webdriver/virtual_authenticator/"
]
---

Web applications can enable a public key-based authentication mechanism known as Web Authentication to authenticate users in a passwordless manner. 
[Web Authentication](https://www.w3.org/TR/webauthn-2/) defines APIs that allows a user to create a public-key credential and register it with an authenticator. 
An authenticator can be a hardware device or a software entity that stores user's public-key credentials and retrieves them on request. 

As the name suggests, Virtual Authenticator emulates such authenticators for testing.

## Virtual Authenticator Options

A Virtual Authenticatior has a [set of properties](https://www.w3.org/TR/webauthn-2/#sctn-automation-virtual-authenticators).
These properties are mapped as VirtualAuthenticatorOptions in the Selenium bindings.

{{< tabpane text=true >}}
{{< tab header="Java" >}}
{{< gh-codeblock path="examples/java/src/test/java/dev/selenium/interactions/VirtualAuthenticatorTest.java#L55-L61" >}}
{{< /tab >}}
{{< tab header="CSharp" >}}
{{< gh-codeblock path="examples/dotnet/SeleniumDocs/Interactions/VirtualAuthenticatorTest.cs#L48-55" >}}
{{< /tab >}}
{{< tab header="Ruby" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="Python" >}}
{{< gh-codeblock path="examples/python/tests/interactions/test_virtual_authenticator.py#L40-L46" >}}
{{< /tab >}}
{{< tab header="JavaScript" >}}
{{< gh-codeblock path="examples/javascript/test/virtual_authenticator/virtualAuthenticatorOptions.spec.js#L11-L17" >}}
{{< /tab >}}
{{< tab header="Kotlin" >}}
{{< badge-code >}}
{{< /tab >}}
{{< /tabpane >}}


## Add Virtual Authenticator

It creates a new virtual authenticator with the provided properties.

{{< tabpane text=true >}}
{{< tab header="Java" >}}
{{< gh-codeblock path="examples/java/src/test/java/dev/selenium/interactions/VirtualAuthenticatorTest.java#L68-L73" >}}
{{< /tab >}}
{{< tab header="CSharp" >}}
{{< gh-codeblock path="examples/dotnet/SeleniumDocs/Interactions/VirtualAuthenticatorTest.cs#L63-71" >}}
{{< /tab >}}
{{< tab header="Ruby" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="Python" >}}
{{< gh-codeblock path="examples/python/tests/interactions/test_virtual_authenticator.py#L53-L58" >}}
{{< /tab >}}
{{< tab header="JavaScript" >}}
{{< gh-codeblock path="examples/javascript/test/virtual_authenticator/virtualAuthenticator.spec.js#L51-L55" >}}
{{< /tab >}}
{{< tab header="Kotlin" >}}
{{< badge-code >}}
{{< /tab >}}
{{< /tabpane >}}

## Remove Virtual Authenticator

Removes the previously added virtual authenticator.

{{< tabpane text=true >}}
{{< tab header="Java" >}}
{{< gh-codeblock path="examples/java/src/test/java/dev/selenium/interactions/VirtualAuthenticatorTest.java#L86" >}}
{{< /tab >}}
{{< tab header="CSharp" >}}
{{< gh-codeblock path="examples/dotnet/SeleniumDocs/Interactions/VirtualAuthenticatorTest.cs#80-86" >}}
{{< /tab >}}
{{< tab header="Ruby" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="Python" >}}
{{< gh-codeblock path="examples/python/tests/interactions/test_virtual_authenticator.py#L68-L74" >}}
{{< /tab >}}
{{< tab header="JavaScript" >}}
{{< gh-codeblock path="examples/javascript/test/virtual_authenticator/virtualAuthenticator.spec.js#L62-L63" >}}
{{< /tab >}}
{{< tab header="Kotlin" >}}
{{< badge-code >}}
{{< /tab >}}
{{< /tabpane >}}

## Create Resident Credential

Creates a resident (stateful) credential with the given required credential [parameters](https://w3c.github.io/webauthn/#sctn-automation-add-credential). 

{{< tabpane text=true >}}
{{< tab header="Java" >}}
{{< gh-codeblock path="examples/java/src/test/java/dev/selenium/interactions/VirtualAuthenticatorTest.java#L100-L103" >}}
{{< /tab >}}
{{< tab header="CSharp" >}}
{{< gh-codeblock path="examples/dotnet/SeleniumDocs/Interactions/VirtualAuthenticatorTest.cs#103-107" >}}
{{< /tab >}}
{{< tab header="Ruby" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="Python" >}}
{{< gh-codeblock path="examples/python/tests/interactions/test_virtual_authenticator.py#L80-L97" >}}
{{< /tab >}}
{{< tab header="JavaScript" >}}
{{< gh-codeblock path="examples/javascript/test/virtual_authenticator/virtualAuthenticator.spec.js#L80-L94" >}}
{{< /tab >}}
{{< tab header="Kotlin" >}}
{{< badge-code >}}
{{< /tab >}}
{{< /tabpane >}}

## Create Non-Resident Credential 

Creates a resident (stateless) credential with the given required credential [parameters](https://w3c.github.io/webauthn/#sctn-automation-add-credential). 

{{< tabpane text=true >}}
{{< tab header="Java" >}}
{{< gh-codeblock path="examples/java/src/test/java/dev/selenium/interactions/VirtualAuthenticatorTest.java#L143-L145" >}}
{{< /tab >}}
{{< tab header="CSharp" >}}
{{< gh-codeblock path="examples/dotnet/SeleniumDocs/Interactions/VirtualAuthenticatorTest.cs#L145-148" >}}
{{< /tab >}}
{{< tab header="Ruby" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="Python" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="JavaScript" >}}
{{< gh-codeblock path="examples/javascript/test/virtual_authenticator/virtualAuthenticator.spec.js#L136-L140" >}}
{{< /tab >}}
{{< tab header="Kotlin" >}}
{{< badge-code >}}
{{< /tab >}}
{{< /tabpane >}}

## Add Credential

Registers the credential with the authenticator. 

{{< tabpane text=true >}}
{{< tab header="Java" >}}
{{< gh-codeblock path="examples/java/src/test/java/dev/selenium/interactions/VirtualAuthenticatorTest.java#L137-L146" >}}
{{< /tab >}}
{{< tab header="CSharp" >}}
{{< gh-codeblock path="examples/dotnet/SeleniumDocs/Interactions/VirtualAuthenticatorTest.cs#L139-150" >}}   
{{< /tab >}}
{{< tab header="Ruby" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="Python" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="JavaScript" >}}
{{< gh-codeblock path="examples/javascript/test/virtual_authenticator/virtualAuthenticator.spec.js#L131-L142" >}}
{{< /tab >}}
{{< tab header="Kotlin" >}}
{{< badge-code >}}
{{< /tab >}}
{{< /tabpane >}}

## Get Credential

Returns the list of credentials owned by the authenticator.

{{< tabpane text=true >}}
{{< tab header="Java" >}}
{{< gh-codeblock path="examples/java/src/test/java/dev/selenium/interactions/VirtualAuthenticatorTest.java#L157-L171" >}}
{{< /tab >}}
{{< tab header="CSharp" >}}
{{< gh-codeblock path="examples/dotnet/SeleniumDocs/Interactions/VirtualAuthenticatorTest.cs#L162-178" >}}  
{{< /tab >}}
{{< tab header="Ruby" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="Python" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="JavaScript" >}}
{{< gh-codeblock path="examples/javascript/test/virtual_authenticator/virtualAuthenticator.spec.js#L154-L170" >}}
{{< /tab >}}
{{< tab header="Kotlin" >}}
{{< badge-code >}}
{{< /tab >}}
{{< /tabpane >}}

## Remove Credential

Removes a credential from the authenticator based on the passed credential id.

{{< tabpane text=true >}}
{{< tab header="Java" >}}
{{< gh-codeblock path="examples/java/src/test/java/dev/selenium/interactions/VirtualAuthenticatorTest.java#L181-L190" >}}
{{< /tab >}}
{{< tab header="CSharp" >}}
{{< gh-codeblock path="examples/dotnet/SeleniumDocs/Interactions/VirtualAuthenticatorTest.cs#L189-198" >}}
{{< /tab >}}
{{< tab header="Ruby" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="Python" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="JavaScript" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="Kotlin" >}}
{{< badge-code >}}
{{< /tab >}}
{{< /tabpane >}}


## Remove All Credentials

Removes all the credentials from the authenticator.

{{< tabpane text=true >}}
{{< tab header="Java" >}}
{{< gh-codeblock path="examples/java/src/test/java/dev/selenium/interactions/VirtualAuthenticatorTest.java#L196-L205" >}}
{{< /tab >}}
{{< tab header="CSharp" >}}
{{< gh-codeblock path="examples/dotnet/SeleniumDocs/Interactions/VirtualAuthenticatorTest.cs#L207-216" >}} 
{{< /tab >}}
{{< tab header="Ruby" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="Python" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="JavaScript" >}}
{{< gh-codeblock path="examples/javascript/test/virtual_authenticator/virtualAuthenticator.spec.js#L181-L190" >}}
{{< /tab >}}
{{< tab header="Kotlin" >}}
{{< badge-code >}}
{{< /tab >}}
{{< /tabpane >}}

## Set User Verified

Sets whether the authenticator will simulate success or fail on user verification.

{{< tabpane text=true >}}
{{< tab header="Java" >}}
{{< gh-codeblock path="examples/java/src/test/java/dev/selenium/interactions/VirtualAuthenticatorTest.java#L211-L212" >}}
{{< /tab >}}
{{< tab header="CSharp" >}}
{{< gh-codeblock path="examples/dotnet/SeleniumDocs/Interactions/VirtualAuthenticatorTest.cs#L224-225" >}} 
{{< /tab >}}
{{< tab header="Ruby" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="Python" >}}
{{< badge-code >}}
{{< /tab >}}
{{< tab header="JavaScript" >}}
{{< gh-codeblock path="examples/javascript/test/virtual_authenticator/virtualAuthenticator.spec.js#L197-L197" >}}
{{< /tab >}}
{{< tab header="Kotlin" >}}
{{< badge-code >}}
{{< /tab >}}
{{< /tabpane >}}
