/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Faq extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>FAQ</h1>
            </header>
            
            <h2>Why is Docker so great?</h2>
            <ul>
            <li>
            Docker provides a virtual development environment that is independent of the host OS. Docker images with pre-installed Ruby can be created and used for working on Ruby projects. You can reset your Docker container to its original conditions in just a few SECONDS, not hours. By using a custom Docker image in tandem with a 1-step build script in your app’s source code, you can reset your development environment to its original conditions AND be back in business in just a few minutes, not hours.
            </li>
            <li>
            Because you have the ability to reset and rebuild everything in just a few minutes, it’s easy to make sure that your 1-step build script in your project works properly. Because you can check your 1-step build process frequently, you can always be on top of ALL of your app’s dependencies and head off the infamous &quot;but it works on my machine&quot; conundrum.
            </li>
            <li>
            If you need to install your project manually in the production environment, the scripts used to create the Docker image combined with the 1-step build script in the source code double as a giant cheat sheet.
            </li>
            <li>
            Anyone who joins your project can be ready to roll in minutes, not hours or days.
            </li>
            </ul>

            <h2>Why is Docker better than Vagrant?</h2>
            Docker is faster, because it provides a virtual environment but not a virtual machine. A virtual machine is a heavy user of memory and processing power and needs a few minutes to boot up. Docker bypasses that overhead, and this allows you to enter your Ruby on Rails development environment in no more than a few seconds.

            <h2>What is a Docker image?</h2>
            A Docker image is an immutable (unchangeable) file consisting of a virtual operating system environment and is analogous to a snapshot in a virtual machine.  Because a given Docker image cannot be changed, you can expect it to always behave in exactly the same way.  This is useful for experimenting with your development setup and knowing EXACTLY what's necessary to make a given project work.  Like other kinds of files, Docker images can be stored and shared with other Docker users.

            <h2>What is a Docker container?</h2>
            A Docker container is an instance of a Docker image in use.  Unlike a Docker image, a Docker container cannot be stored as one file or shared with other Docker users.  However, a Docker container can be used as the basis of a new Docker image.  In fact, most Docker images are not created from scratch but are modified versions of other Docker images.  The changes used to transform a given Docker image into the next one downstream are layers.
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Faq;
