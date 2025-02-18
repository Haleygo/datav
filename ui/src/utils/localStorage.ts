// Copyright 2023 Datav.io Team
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const storageKey = 'datav.'
const storage = {
    set(key: string, value: any) {
        if (typeof window !== "undefined") {
            window.localStorage.setItem(storageKey + key, JSON.stringify(value))
        }

    },
    get(key: string) {
        if (typeof window !== "undefined") {
            const r = window.localStorage.getItem(storageKey + key)
            if (r && r != "undefined") {
                return JSON.parse(r)
            }   
        }
    },
    remove(key: string) {
        if (typeof window !== "undefined") {
            window.localStorage.removeItem(storageKey + key)
        }
    }
}

export default storage