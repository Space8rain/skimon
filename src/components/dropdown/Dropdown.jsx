import Dropdown from "react-multilevel-dropdown";
import styles from './Dropdown.module.css'

function Dropdown_btn({clusters, currentCluster, onClick}) {
  const iconNavPoint = <svg key={'svg'} width="20" height="20" viewBox="0 0 16 19" fill="none">
    <path fill="currentColor" d="M13.3033 13.47L8 18.7734L2.69667 13.47C1.64779 12.4211 0.933489 11.0847 0.644107 9.62989C0.354725 8.17504 0.503256 6.66704 1.07092 5.2966C1.63858 3.92616 2.59987 2.75483 3.83324 1.93072C5.0666 1.10661 6.51665 0.666748 8 0.666748C9.48336 0.666748 10.9334 1.10661 12.1668 1.93072C13.4001 2.75483 14.3614 3.92616 14.9291 5.2966C15.4967 6.66704 15.6453 8.17504 15.3559 9.62989C15.0665 11.0847 14.3522 12.4211 13.3033 13.47ZM8 9.83335C8.44203 9.83335 8.86595 9.65776 9.17851 9.3452C9.49107 9.03263 9.66667 8.60871 9.66667 8.16668C9.66667 7.72466 9.49107 7.30073 9.17851 6.98817C8.86595 6.67561 8.44203 6.50002 8 6.50002C7.55797 6.50002 7.13405 6.67561 6.82149 6.98817C6.50893 7.30073 6.33334 7.72466 6.33334 8.16668C6.33334 8.60871 6.50893 9.03263 6.82149 9.3452C7.13405 9.65776 7.55797 9.83335 8 9.83335Z"/>
    </svg>;

  try {
    return (
      <Dropdown
        menuClassName={styles.dropdown_menu}
        className={styles.btn_dropdown}
        title={[iconNavPoint, currentCluster.name || clusters[0].cluster_name]}
      >
        {clusters.map((cluster) => (
          <Dropdown.Item
            title={cluster.cluster_name}
            key={cluster.cluster_id}
            className={styles.dropdown_item}
            id={cluster.cluster_id}
          >
            {cluster.cluster_name}

            {cluster.regions && (
              <Dropdown.Submenu className={styles.dropdown_submenu}>
                {cluster.regions.map((region) => (
                  <Dropdown.Item
                    title={region.region_name}
                    className={styles.dropdown_item}
                    onClick={onClick}
                    key={region.region_id}
                    id={region.region_id}
                  >
                    {region.region_name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Submenu>
            )}
          </Dropdown.Item>
        ))}
      </Dropdown>
    )
  } catch {}
}

export default Dropdown_btn