// task 1

const container = document.querySelector('.container')
const url = 'https://jsonplaceholder.typicode.com/posts';

interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string
}

const query = async (url: string) => {
  return await fetch(url)
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    else {
      throw new Error(`${res.status}`);;
    }
  }) 
}

const fetchUsers = async <T> () : Promise<T> => await query(url) as Promise<T>

const renderUsers = (users: IUser[]) => {
  for (const user of users){
    container?.insertAdjacentHTML('beforeend', `
    <div class="d-inline-flex">
    <div class="card text-white bg-secondary mb-3" style="max-width: 17rem; min-height: 25rem">
    <div class="card-header">id:${user.id} userId: ${user.userId}</div>
    <div class="card-body">
      <h5 class="card-title">${user.title}</h5>
      <p class="card-text">${user.body}</p>
    </div>
    </div>
  </div>`)
  }
}

const main = async (): Promise<void> => {
  try {
    const users = await fetchUsers<IUser[]>();
    renderUsers(users)
  } catch (error) {
    console.log(error);
  }
}

main()

// test values for task2

const initialArray: ObjectShape[] = [
  {id: 1, title: 'first', body: 'object'},
  {id: 2, title: 'second', body: 'object'},
  {id: 3, title: 'third', body: 'object'},
  {id: 4, title: '4th', body: 'object'},
  {id: 5, title: '5th', body: 'object'},
  {id: 6, title: '6th', body: 'object'},
  {id: 7, title: '7th', body: 'object'},
  {id: 8, title: '8th', body: 'object'},
  {id: 9, title: '9th', body: 'object'}
];
const keyToFind = 'title';
const keyValueToFind = '6th';
const patch: Partial<ObjectShape> = {title: 'now is 5th'} 

// task 2

interface ObjectShape {
  id: number;
  title: string;
  body: string
}

const updateObjectInArray = <T> (
  initialArray: Array<T>, 
  keyToFind: string, 
  keyValueToFind: number | string, 
  patch: Partial<T>
) : T[] => {
  const clonedArray = JSON.parse(JSON.stringify(initialArray));

  for (let obj of clonedArray) {
    if(obj[keyToFind] === keyValueToFind){ 
      for (const key in patch) {
        obj[key] = patch[key]
      }
    }
  }

  return clonedArray as T[]
}

console.log(updateObjectInArray<ObjectShape>(initialArray, keyToFind, keyValueToFind, patch));
