import React, { useReducer } from 'react'
import { intialtState, reducer } from './reducersugnup'
import { useSignup } from '../../../hooks/useSignup'
import Loading from '../../loading/Loading'

const Signup = () => {

  const [data, dispatch] = useReducer(reducer, intialtState)
  const { handleSubmit, signdata, nonfielderror, error, loading } = useSignup(data, dispatch)

  return (
    <div className='bg-[rgb(104,171,203)] backgroundlogin relative top-[50px] md:top-[55px]'>
      <div className='loginpage pl-[15px] pr-[15px]'>
        <div className='flex justify-center w-full'>
        {loading &&  <Loading />}
        </div>
        {signdata && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-green-700">{signdata}</div>}
        {nonfielderror && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{nonfielderror}</div>}
        <form onSubmit={handleSubmit}>
          {error?.name && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{error?.name}</div>}
          <label className="form-label my-2">Name</label>
          <input type="text" value={data.name} onChange={(e) => dispatch({ type: 'NAME', value: e.target.value })} className="form-control" />

          {error?.email && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{error?.email}</div>}
          <label className="form-label my-2"  >Email</label>
          <input type="email" value={data.email} onChange={(e) => dispatch({ type: 'EMAIL', value: e.target.value })} className="form-control" />

          {error?.password && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{error?.password}</div>}
          <label className="form-label my-2">Password</label>
          <input type="text" value={data.password} onChange={(e) => dispatch({ type: 'PASSWORD', value: e.target.value })} className="form-control" />
          {error?.password2 && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{error.password2}</div>}
          <label className="form-label my-2">Confirmed Password</label>
          <input type="text" value={data.password2} onChange={(e) => dispatch({ type: 'PASSWORD2', value: e.target.value })} className="form-control" />
          <span className='flex'>
            <input type="checkbox" value={data.tc} onChange={(e) => dispatch({ type: 'CHECKED', value: e.target.checked })} className="form-check-input my-2 mx-2" />
            <label htmlFor="checkbox" className='flex items-center justify-center'>Are you sure to Singup</label>
          </span>
          <button className='btn btn-primary my-2'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup