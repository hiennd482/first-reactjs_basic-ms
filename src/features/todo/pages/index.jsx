import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Listpage from '../pages/ListPage';
import Detailss from '../pages/DetailPage';


const Todofeatures = (props) => {

    return (
        <div>

            <Routes>
                <Route >
                    <Route index element={<Listpage />} ></Route>
                    <Route path='todonhes' element={<Listpage />} ></Route>
                    <Route path='todonhes/:todoId' element={<Detailss />}></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default Todofeatures;