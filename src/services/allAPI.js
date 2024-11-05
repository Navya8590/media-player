import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"
// saveVideo - post http rqst called add component when user click on add button
export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)

}
// getAllVideoAPI - get http rqst called view component when component displayed in browser in side its use effect hook
export const getAllVideoAPI =async()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
}

// saveHistoryAPI-post http rqst to http://localhost:3000/history called by VideoCard component when we play video
export const saveHistoryAPI =async (historyDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/history`,historyDetails)
}

// getAllHistoryAPI - get http rqst to http://localhost:3000/history called by history component when it open in browser
export const getAllHistoryAPI = async()=>{
    return await commonAPI("GET",`${SERVERURL}/history`,"")
}

// deleteHistoryAPI - delete http rqst to  http://localhost:3000/history/id called by history component when user click on delete button 

export const deleteHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}

// removeVideoAPI - delete http rqst called vedioCard component when component when user click on delete button 
export const removeVideoAPI =async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}

// saveCategoryAPI - post http rqst to http://localhost:3000/categories called by caregory component when user click on add button

export const saveCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)
}

// getAllCategoryAPI - get http rqst to http://localhost:3000/categories called by caregory component when component upload 
export const getAllCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/categories`,{})
}

// removeCatagoryAPI - delete http rqst called category component when component when user click on delete button 
export const removeCatagoryAPI =async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})
}

// updateCategoryAPI - put http rqst to http://localhost:3000/categories/id called  by category component when video drop over the categoey
export const updateCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}