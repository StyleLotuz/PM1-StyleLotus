class Activity{
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.id = 0;
        this.activities = [];
    }

    getAllActivities(){
        return this.activities;
    }

    createActivity(title, description, imgUrl){
        this.id++;
        const activity = new Activity(this.id, title, description, imgUrl)
        this.activities.push(activity)
    }

    deleteActivity(id){
       this.activities = this.activities.filter((activity)=> activity.id !== id)
    }
}


