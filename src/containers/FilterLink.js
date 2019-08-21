import { connect } from 'react-redux';
import { VisibilityFilter } from '../actions/index'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => (
    {
        // for checking if the link is selected. Used for disabling the <a /> tag
        active: state.visibilityFilter === ownProps.filter
    }
);

const mapDispatchToProps = (dispatch, ownProps) => (
    {
        // uses VisibilityFilter action creator and passes a filter value.
        onClick : ()=> dispatch(VisibilityFilter(ownProps.filter))
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);