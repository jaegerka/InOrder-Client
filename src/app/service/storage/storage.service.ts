import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Currentstate } from 'src/app/model/currentstate/currentstate';
// import { BasicAuthenticator, CordovaEngine, Database, Function } from '@ionic/storage';

export interface Tool {
  id: number,
  modified: number,
  title: string,
  favorite: Boolean
}

const TOOLS_KEY = 'my-favorites';
const CURRENTSTATES_KEY= 'my-currentstates';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }

  //Create Tool
  addTool(tool: Tool) {
    return this.storage.get(TOOLS_KEY).then((tools: Tool[]) => {
      if (tools) {
        tools.push(tool);
        return this.storage.set(TOOLS_KEY, tools);
      } else {
        return this.storage.set(TOOLS_KEY, [tool]);
      }
    });
  }

  //Get Tools
  getTools() {
    return this.storage.get(TOOLS_KEY);
  }

  deleteTool(id: number): Promise<Tool> {
    return this.storage.get(TOOLS_KEY)
      .then((tools: Tool[]) => {
        if (!tools || tools.length === 0) {
          return null;
        }

        let toKeep: Tool[] = [];

        for (let tool of tools) {
          if (tool.id !== id) {
            toKeep.push(tool);
          }
        }

        return this.storage.set(TOOLS_KEY, toKeep);
      })
  } 


  //Create Current State
  addCurrentState(currentState: Currentstate) {
    return this.storage.get(CURRENTSTATES_KEY).then((currentStates: Currentstate[]) => {
      if (currentStates) {
        currentStates.push(currentState);
        return this.storage.set(CURRENTSTATES_KEY, currentStates);
      } else {
        return this.storage.set(CURRENTSTATES_KEY, [currentState]);
      }
    });
  }

  //Get Current States
  getCurrentStates() {
    return this.storage.get(CURRENTSTATES_KEY);
  }

}
