<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        //? returns a JSON object with a specific structure
        // return response()->json(['/categories' => Category::all()]);
        
        //? returns custom collection class
        return new CategoryCollection(Category::all());
    }
}
