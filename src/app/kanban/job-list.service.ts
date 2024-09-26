import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { JobList } from "./job-list.model";
import { ppid } from "process";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
    providedIn: "root"
})
export class JobListService {
    jobLists: JobList[] = [];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    updateLocalStorage(): void {
        if (window && window.localStorage) {
            // chuyển thành json
            window.localStorage.setItem("jobLists", JSON.stringify(this.jobLists));
        }
    }

    clearLocalStorage(): void {
        if (window && window.localStorage) {
            window.localStorage.removeItem("jobLists");
        }
    }

    getJobLists(): JobList[] {
        if (isPlatformBrowser(this.platformId)) {
            // Chỉ thực hiện khi đang chạy trên trình duyệt
            if (window && window.localStorage) {
                this.jobLists = JSON.parse(window.localStorage.getItem('jobLists') || '[]');
            }
        }

        return this.jobLists;
    }

    addNewJob(listIndex: number, jobName: string): boolean {
        //thêm job vào đúng index và cập nhật list
        this.jobLists[listIndex].jobs.push(jobName);
        this.updateLocalStorage();
        return true;
    }

    addNewList(listName: string): boolean {
        // tạo 1 list mới
        this.jobLists.push({
            id: Date.now(),
            name: listName,
            jobs: [],
        })

        this.updateLocalStorage();

        return true;
    }

    deleteJob(listIndex: number, jobIndex: number): boolean {
        if (this.jobLists[listIndex]) {
            //tìm đúng đến index của list đấy
            //sau đó xóa 1 job trong list đấy
            this.jobLists[listIndex].jobs.splice(jobIndex, 1);
            this.updateLocalStorage();
            return true;
        }
        return false;
    }

    deleteList(listIndex: number): boolean {
        if (this.jobLists[listIndex]) {
            this.jobLists.splice(listIndex, 1);

            this.updateLocalStorage();
            return true;
        }

        return false;
    }

    //edit
    editJobName(listIndex: number, jobIndex: number, newJobName: string): boolean {
        if (this.jobLists[listIndex] && this.jobLists[listIndex].jobs[jobIndex]) {
            this.jobLists[listIndex].jobs[jobIndex] = newJobName;

            this.updateLocalStorage();
            return true;
        }

        return false;
    }

    editListName(updateList: JobList): boolean {
        const listIndex = this.jobLists.findIndex(list => list.id === updateList.id);
        
        //nếu tìm thấy
        if (listIndex !== -1) {
            this.jobLists[listIndex].name = updateList.name;

            this.updateLocalStorage();
            
            return true;
        }

        return false;
    }
}