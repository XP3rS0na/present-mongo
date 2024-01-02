import ClientPromise from '../../lib/mongodb'
import { MongoClient, ObjectId } from 'mongodb'
import { FormData } from '@/app/contact/page';

export interface MyDocument {
  _id: ObjectId;
  name: string;
  mail: string;
  content: string;
}

export async function Call () {
  const client = await ClientPromise;
  const collection = client.db("testPort").collection("form")
  const data = await collection.find({}).toArray();
  
  const table: {id : ObjectId, name: string, mail: string, content: string}[] = data.map((item: MyDocument)=> ({
    _id: item._id,
    name: item.name,
    mail: item.mail,
    content: item.content,
    
  }));

  console.log(table);
  }

  const newDocument: MyDocument = {
    _id: new ObjectId(),
    name: 'New Document',
    mail: 'new@example.com',
    content: 'Some content',
  };

  export async function createDoc(request: Request) {
    const formData = await request.formData()
    const _name = formData.get('name')
    const _mail = formData.get('mail')
    const _content = formData.get('content')
    function find(): MyDocument {
      const newDocument: MyDocument = {
        _id: new ObjectId(),
        name: _name as string, 
        mail: _mail as string,
        content: _content as string,
      };
    
      return newDocument;
    }
    find();
  }

  console.log(newDocument)



  

  export async function Insert(document: MyDocument): Promise<void> {
    const client = await ClientPromise;
    const collection = client.db("testPort").collection("form");
  
    try {
      // Insert the document into the collection
      await collection.insertOne(document);
      console.log('Document inserted successfully:', document);
    } catch (error) {
      console.error('Error inserting document:', error);
      throw error; // Re-throw the error for further handling
    }
  }

  
  
