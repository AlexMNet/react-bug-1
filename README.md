# React bug 1

### Story

Your coworker has been tasked to make an application that keeps track of everyone onboard a cruise ship! As people board, their name is added to a list that is sorted Alphabetically. Anytime someone leaves the ship, their name can be clicked to cross it out (it can also be click again to uncross the name). Your coworker, ready to go home, puts something together in haste and ships it!

As the staff is using the app there is something not quite right. They add names, cross some out and realize that the crossed out line seems to jump to different names! So you have been called in the middle of the night to debug your coworkers application to get it working before they lose track of the vacationers!

#### Steps to Reproduce

- Add "Jessica"
- Add "Robert"
- Cross out Jessica
- Add Stephen
- Add Keith
- Add Chris

Expected Jessica's name to be crossed out which it was initially but it then jumped to Alex's name.

## How to run project locally

- Download the project to your local machine either clicking the "Code" button and selected "Download ZIP" or [cloning](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the project.
- `npm install` in the route directory
- `npm run dev`
