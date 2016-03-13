# Curriculum Vitae
This project represents both a web front end as well as the infrastructure
configuration required to host it. This specific website is intended to act
as a unique curriculum vitae.

Specifically, I wanted to showcase some of the aspects of development I most
enjoy at this point, without getting too complicated or requiring too much
time from a prospective evaluator.

## Features
My curriculum vitae is split into a number of sections covering my experience
both as a developer and operations manager and, to a lesser degree, my academic
qualifications.

I've included a couple of projects which I have recently worked on, as well as
a small back story for each if you're interested.

In addition to this, I cover the technologies I have spent time working with as
well as a subjective rating of how confident I feel with each and my level of
enjoyment in my last experience with them.

## Technologies

### Frontend
The frontend is built using a combination of [Aurelia](http://aurelia.io) and
[MaterializeCSS](http://materializecss.com). All of the backing code is written
in TypeScript and I've endeavoured to make it maintainable, extensible and readable.

### Infrastructure
The infrastructure aspect of this website is managed using Ansible, you'll find the
various playbooks and their supporting roles in the Infrastructure folder. Every role
was written specifically for this project, however in many cases inspiration was taken
from previous projects I have worked on (and which used modules from Ansible Galaxy).