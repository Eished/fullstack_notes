const createTimeFrame = (startDate) => {
  const startDateTime = new Date(startDate).getTime()
  const now = new Date().getTime()

  let timeFrameName = ''

  // Day 1 1000 * 3600 * 24
  if (now - startDateTime <= 86400000 || startDate === '1970-01-01T00:00:00Z') {
    console.log('Day 1', 1000 * 3600 * 24)
    timeFrameName = 'Day 1'
  } else if (now - startDateTime > 86400000 && now - startDateTime <= 604800000) {
    // Week 1 1000 * 3600 * 24 * 7
    console.log('Week 1', 1000 * 3600 * 24 * 7)
    timeFrameName = 'Week 1'
  } else if (now - startDateTime > 604800000 && now - startDateTime <= 1814400000) {
    // Week 2-3 1000 * 3600 * 24 * 21
    console.log('Week 2-3', 1000 * 3600 * 24 * 21)
    timeFrameName = 'Week 2-3'
  }
  return timeFrameName
}
export const prepareUserFromSolr = () => {
  const user = {
    new_starter: true,
    // start_date: '2022-05-29T01:03:25.954Z',
    start_date: '1970-01-01T00:00:00Z',
    // start_date: '2022-06-01T01:03:25.954Z',
  }
  const resultUser = {
    id: 'solr_prototype_users',
    index_id: 'solr_prototype_users',
    uuid: 'user.ss_uuid',
    username: 'tm_name.0',
    user_avatar: 'ss_profile_picture_url_large_avatar',
    email: 'tm_mail.0',
    hide_email: 'bs_field_hide_email_address',
    external_id: 'ss_field_external_id',
    roles: 'user.sm_role_names',
    status: 'user.is_status, statuses',
    phone: 'tm_field_phone_no.0',
    mobile: 'tm_field_phone_mobile.0',
    hide_phone_numbers: 'bs_field_hide_phone_number',
    manager_uuid: 'field(ss_field_manager:uuid)',
    firstname: 'ss_field_forename',
    middle_name: 'tm_field_middle_name.0',
    surname: 'ss_field_surname',
    known_as: 'tm_field_known_as.0',
    person_type: 'field(ss_field_person_types:uuid)',
    user_uuid: 'user.ss_uuid',
    authname: 'extractAuthName(user)',
    read_only: 'Read-only (Hidden role)',
    about_me: 'tm_field_about_me:value.0',
  }

  // Start date = Date user first logs into the site
  // New Starter Timeframe - New Webmaster configuration
  if (user.new_starter) {
    resultUser.new_starter = user.new_starter
    resultUser.start_date = user.start_date
    resultUser.time_frame_name = createTimeFrame(user.start_date)
  }

  return resultUser
}
