package application.response;

/**
 * Created by gipai on 10/4/2017.
 */
public class PageResponse extends RestResponse{

    private long totalElements ;
    private int pageNumber;
    private int pageSize;

    public PageResponse(Object returnVal,long totalElements, int pageNumber, int pageSize ) {
        super(returnVal);
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.totalElements=totalElements;
    }


    public long getTotalElements() {
        return totalElements;
    }

    public void setTotalElements(long totalElements) {
        this.totalElements = totalElements;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }
}
