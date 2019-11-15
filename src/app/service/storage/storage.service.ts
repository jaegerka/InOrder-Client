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

const DEPRESSION_TOOLS_KEY = 'my-depression-favorites';
const MANIC_TOOLS_KEY = 'my-manic-favorites'
const CURRENTSTATES_KEY= 'my-currentstates';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }

  //Create Depression Tool
  addDepressionTool(tool: Tool) {
    return this.storage.get(DEPRESSION_TOOLS_KEY).then((tools: Tool[]) => {
      if (tools) {
        tools.push(tool);
        return this.storage.set(DEPRESSION_TOOLS_KEY, tools);
      } else {
        return this.storage.set(DEPRESSION_TOOLS_KEY, [tool]);
      }
    });
  }

  //Get Depression Tools
  getDepressionTools() {
    return this.storage.get(DEPRESSION_TOOLS_KEY);
  }

  //Delete Depresion Tool
  deleteDepressionTool(id: number): Promise<Tool> {
    return this.storage.get(DEPRESSION_TOOLS_KEY)
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

        return this.storage.set(DEPRESSION_TOOLS_KEY, toKeep);
      })
  } 


   //Create Manic Tool
   addManicTool(tool: Tool) {
    return this.storage.get(MANIC_TOOLS_KEY).then((tools: Tool[]) => {
      if (tools) {
        tools.push(tool);
        return this.storage.set(MANIC_TOOLS_KEY, tools);
      } else {
        return this.storage.set(MANIC_TOOLS_KEY, [tool]);
      }
    });
  }

  //Get Manic Tools
  getManicTools() {
    return this.storage.get(MANIC_TOOLS_KEY);
  }

  //Delete Manic Tool
  deleteManicTool(id: number): Promise<Tool> {
    return this.storage.get(MANIC_TOOLS_KEY)
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

        return this.storage.set(MANIC_TOOLS_KEY, toKeep);
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
