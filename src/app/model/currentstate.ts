export class Currentstate {

    id: number;
    depressedpercentage: number;
    manicpercentage: number;
    environment: string;
    comfort: string;
    behavior: string;


    public CurrentState(id: number, depressedpercentage: number, manicpercentage: number, environment: string, comfort: string, behavior: string) {
        this.id = id;
        this.depressedpercentage = depressedpercentage;
        this.manicpercentage = manicpercentage;
        this.environment = environment;
        this.comfort = comfort;
        this.behavior = behavior;
    }
}
