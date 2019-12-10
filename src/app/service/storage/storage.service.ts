import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Currentstate } from 'src/app/model/currentstate/currentstate';

export interface Tool {
  id: number,
  modified: number,
  title: string,
  favorite: Boolean
}

const SIMPLE_DEPRESSION_TOOLS_KEY = 'simple-depression-favorites';
const SIMPLE_MANIC_TOOLS_KEY = 'simple-manic-favorites'
const STRONGER_DEPRESSION_TOOLS_KEY = 'stronger-depression-favorites';
const STRONGER_MANIC_TOOLS_KEY = 'stronger-manic-favorites'
const EXTREME_DEPRESSION_TOOLS_KEY = 'extreme-depression-favorites';
const EXTREME_MANIC_TOOLS_KEY = 'extreme-manic-favorites'
const CURRENTSTATES_KEY= 'my-currentstates';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }

  addSimpleDepressionTool(tool: Tool) {
    return this.storage.get(SIMPLE_DEPRESSION_TOOLS_KEY).then((tools: Tool[]) => {
      if (tools) {
        tools.push(tool);
        return this.storage.set(SIMPLE_DEPRESSION_TOOLS_KEY, tools);
      } else {
        return this.storage.set(SIMPLE_DEPRESSION_TOOLS_KEY, [tool]);
      }
    });
  }

  getSimpleDepressionTools() {
    return this.storage.get(SIMPLE_DEPRESSION_TOOLS_KEY);
  }

  deleteSimpleDepressionTool(id: number): Promise<Tool> {
    return this.storage.get(SIMPLE_DEPRESSION_TOOLS_KEY)
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

        return this.storage.set(SIMPLE_DEPRESSION_TOOLS_KEY, toKeep);
      })
  } 

  //Stronger Depression Tools
  addStrongerDepressionTool(tool: Tool) {
    return this.storage.get(STRONGER_DEPRESSION_TOOLS_KEY).then((tools: Tool[]) => {
      if (tools) {
        tools.push(tool);
        return this.storage.set(STRONGER_DEPRESSION_TOOLS_KEY, tools);
      } else {
        return this.storage.set(STRONGER_DEPRESSION_TOOLS_KEY, [tool]);
      }
    });
  }
  
  getStrongerDepressionTools() {
    return this.storage.get(STRONGER_DEPRESSION_TOOLS_KEY);
  }

  deleteStrongerDepressionTool(id: number): Promise<Tool> {
    return this.storage.get(STRONGER_DEPRESSION_TOOLS_KEY)
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

        return this.storage.set(STRONGER_DEPRESSION_TOOLS_KEY, toKeep);
      })
  } 

  //Extreme Depression Tools
  addExtremeDepressionTool(tool: Tool) {
    return this.storage.get(EXTREME_DEPRESSION_TOOLS_KEY).then((tools: Tool[]) => {
      if (tools) {
        tools.push(tool);
        return this.storage.set(EXTREME_DEPRESSION_TOOLS_KEY, tools);
      } else {
        return this.storage.set(EXTREME_DEPRESSION_TOOLS_KEY, [tool]);
      }
    });
  }
  
  getExtremeDepressionTools() {
    return this.storage.get(EXTREME_DEPRESSION_TOOLS_KEY);
  }

  deleteExtremeDepressionTool(id: number): Promise<Tool> {
    return this.storage.get(EXTREME_DEPRESSION_TOOLS_KEY)
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

        return this.storage.set(EXTREME_DEPRESSION_TOOLS_KEY, toKeep);
      })
  } 






  //Simple Manic Tools
   addSimpleManicTool(tool: Tool) {
    return this.storage.get(SIMPLE_MANIC_TOOLS_KEY).then((tools: Tool[]) => {
      if (tools) {
        tools.push(tool);
        return this.storage.set(SIMPLE_MANIC_TOOLS_KEY, tools);
      } else {
        return this.storage.set(SIMPLE_MANIC_TOOLS_KEY, [tool]);
      }
    });
  }

  getSimpleManicTools() {
    return this.storage.get(SIMPLE_MANIC_TOOLS_KEY);
  }

  deleteSimpleManicTool(id: number): Promise<Tool> {
    return this.storage.get(SIMPLE_MANIC_TOOLS_KEY)
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

        return this.storage.set(SIMPLE_MANIC_TOOLS_KEY, toKeep);
      })
  } 

  //Stronger Manic Tools
  addStrongerManicTool(tool: Tool) {
    return this.storage.get(STRONGER_MANIC_TOOLS_KEY).then((tools: Tool[]) => {
      if (tools) {
        tools.push(tool);
        return this.storage.set(STRONGER_MANIC_TOOLS_KEY, tools);
      } else {
        return this.storage.set(STRONGER_MANIC_TOOLS_KEY, [tool]);
      }
    });
  }

  getStrongerManicTools() {
    return this.storage.get(STRONGER_MANIC_TOOLS_KEY);
  }

  deleteStrongerManicTool(id: number): Promise<Tool> {
    return this.storage.get(STRONGER_MANIC_TOOLS_KEY)
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

        return this.storage.set(STRONGER_MANIC_TOOLS_KEY, toKeep);
      })
  } 

  //Extreme Manic Tools
  addExtremeManicTool(tool: Tool) {
    return this.storage.get(EXTREME_MANIC_TOOLS_KEY).then((tools: Tool[]) => {
      if (tools) {
        tools.push(tool);
        return this.storage.set(EXTREME_MANIC_TOOLS_KEY, tools);
      } else {
        return this.storage.set(EXTREME_MANIC_TOOLS_KEY, [tool]);
      }
    });
  }

  getExtremeManicTools() {
    return this.storage.get(EXTREME_MANIC_TOOLS_KEY);
  }

  deleteExtremeManicTool(id: number): Promise<Tool> {
    return this.storage.get(EXTREME_MANIC_TOOLS_KEY)
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

        return this.storage.set(EXTREME_MANIC_TOOLS_KEY, toKeep);
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
