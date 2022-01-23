export default{
    title: 'Project', 
    name:'project',
    type:'document',
    fields:[
        {
            title:'My project name',
            name:'myProjectName',
            type:"string",

        },
        {
            title:'slug',
            name:"slug",
            type:'slug',
            options:{
                source:"myProjectName"
            },
        },
        { title:'project-link',
            name:'projectLink',
            type:'url',
           
        },
       { title:'graphic',
        name:'graphic',
        type:'image',
        options:{
            hotspot:true
        },
    }, 
    
    ]
}